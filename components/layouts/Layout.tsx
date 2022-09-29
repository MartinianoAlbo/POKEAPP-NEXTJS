import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";



interface LayoutProps {
  children?: any;
  title?: string
}


const Layout: FC<LayoutProps> = ({children, title}) => {

  return (
    <>
      <Head>
         <title>{ title? title  : 'PokemonApp' }</title>
         <meta name="author" content="Albornoz Alvaro"/>
         <meta name="description" content={ `Info sobre pokemon ${ title }` }/>
         <meta name="keywords" content={`${ title }, pockedex, pockebola, pockemon`}/>
       </Head>  

        <Navbar />

       <main style={{
        padding: "20px 20px "
       }}>
         { children }
       </main>
     </>
  );
}
 
export default Layout;