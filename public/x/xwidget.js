const loadStylesheet = () => {
  let head = document.getElementsByTagName('HEAD')[0]
  let link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = 'https://widget.weezboo.com/x/xwidget.css'
  head.appendChild(link)
}
loadStylesheet()

const xWidget = ({ workspace_id }) => {
  function initSupabase() {
    var script = document.createElement('script')
    script.src = 'https://unpkg.com/@supabase/supabase-js@2'
    script.onload = function () {
      // Initialize Supabase client here
      const SUPABASE_URL = 'https://npwoitbpqbsundoyaplm.supabase.co'
      const SUPABASE_ANON_KEY = 'your-anon-key-here'
      const supaClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
      // You may want to call a function here that depends on supaClient being initialized
      // Function to get data
      const getDataByIdAndTable = (id, table) => {
        return supaClient.from(table).select().eq('id', id)
      }
      // Function to fetch initial data from Supabase
      const fetchInitialData = () => {
        getDataByIdAndTable(workspace_id, 'workspaces')
          .then(async ({ data: workspace, error }) => {
            if (error) {
              console.error('Error fetching initial data:', error.message)
            } else {
              const { activeWidgetId } = workspace[0]
              if (activeWidgetId) {
                const { data: activeWidget, error } = await getDataByIdAndTable(
                  activeWidgetId,
                  'widgets'
                )
                if (error) {
                  console.log(error)
                } else {
                  renderWidget(activeWidget[0])
                }
              }
            }
          })
          .catch((err) => console.log(err))
      }

      fetchInitialData()

      const renderIcon = (icon) => {
        const isSvg = icon.indexOf('svg') !== -1

        return isSvg
          ? `<img
        src=data:image/svg+xml;utf8,${encodeURIComponent(icon)}
        alt='widget icon'
        width="20px"
        height="20px"
      />`
          : `<div>${icon}</div>`
      }

      const createWidget = ({
        id,
        widgetTitle,
        widgetBody,
        widgetPosition,
        emoji,
        ctaUrl,
        ctaText,
      }) =>
        `
    <div class="x-widget" id=${id} position=${widgetPosition}>
      <div class="x-widget-content">
        <div class="x-widget-header">  
          <div class="x-widget-title">
            <div class="x-widget-icon">${emoji && renderIcon(emoji)}</div>
            <div>${widgetTitle}</div>
          </div>
          <button class="x-widget-btn btn-text close-btn">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="x-widget-body">
          <div class="x-widget-body_text">${widgetBody}</div>
          ${
            ctaUrl &&
            `<a href=${ctaUrl} target="_blank">
              <button class="x-widget-btn btn-contained">${ctaText}</button>
            </a>`
          }
        </div>
    </div>
  `

      // Function to render the widget
      const renderWidget = (widget) => {
        // Current widget on display
        const xWidget = document.querySelector('.x-widget')
        if (xWidget) {
          xWidget.remove()
        }
        const newWidget = createWidget(widget)
        document.body.insertAdjacentHTML('beforeend', newWidget)
        const closeButton = document.querySelector('.x-widget-btn.close-btn')
        closeButton.addEventListener('click', () =>
          document.getElementById(widget.id).classList.remove('show')
        )
        setTimeout(function () {
          document.getElementById(widget.id).classList.add('show')
        }, 500)
      }

      // Function to handle real-time updates
      const handleRealtimeUpdates = async (payload) => {
        console.log(payload)
        if (payload.eventType === 'UPDATE') {
          const { activeWidgetId } = payload.new

          if (activeWidgetId) {
            const { data: activeWidget, error } = await getDataByIdAndTable(
              payload.new.activeWidgetId,
              'widgets'
            )
            if (error) {
              console.error('Error updating active widget', error.message)
            } else {
              renderWidget(activeWidget[0])
            }
          }
        }
      }

      supaClient
        .channel('workspaces')
        .on(
          'postgres_changes',
          {
            event: 'update',
            schema: 'public',
            table: 'workspaces',
            filter: `id=eq.${workspace_id}`,
          },
          handleRealtimeUpdates
        )
        .subscribe()
    }
    document.head.appendChild(script)
  }
  initSupabase()
}
