import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import Image from "next/image";
import NextLink from 'next/link'


 const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent:"start",
      alignItems: "center",
      padding: "0px 20px",
      backgroundColor: theme?.colors.gray900.value

    }}>

      <Image 
        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"}
        height={50}
        width={50}
        alt="logo"
      />

      <NextLink href={"/"} passHref >
        <Link >
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            ockémon
          </Text>
        </Link>
      </NextLink>


      <Spacer css={{
        flex:1
      }}/>

      <NextLink href={"/favorites"} passHref>
        <Link  >
          <Text color="white">
            Favoritos
          </Text>
        </Link>
      </NextLink>

    </div>
  )
}

export default Navbar;