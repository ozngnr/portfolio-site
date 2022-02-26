import { Text } from "./sectionName.styled.js"
import PropTypes from "prop-types"

const SectionName = ({ name, active }) => {
  return <Text active={active}>{name}</Text>
}

SectionName.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
}

export default SectionName
