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
        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"}
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
            ocke App
          </Text>
        </Link>
      </NextLink>


      <Spacer css={{
        flex:1
      }}/>

      <NextLink href={"/favorites"} passHref>
        <div style={{ 
          'border': '10px;',
          'borderWidth': '10px;',
          'borderColor': 'red;'
        }} >
          <Link>
            <Text color="red" >
              Favoritos
            </Text>
          </Link>
        </div>
      </NextLink>

    </div>
  )
}

export default Navbar;