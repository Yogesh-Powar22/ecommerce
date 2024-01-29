import { Helmet } from 'react-helmet'

interface HelmetInterface {
  title:string ,
  meta?:string
}

const  HelmetTitle = ({title,meta}:HelmetInterface) => {
 

  return(

      <Helmet>
        <title>{title}</title>
        <meta name="description" content={meta} />
      </Helmet>
  )
}

export default HelmetTitle;