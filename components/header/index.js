import * as S from "./header.styled"
import Link from "next/link"

export default function Header() {
  return (
    <S.Header>
      <S.Logo>
        <Link href="/" passHref>
          <S.LogoLink>ozanguner.</S.LogoLink>
        </Link>
      </S.Logo>
    </S.Header>
  )
}
