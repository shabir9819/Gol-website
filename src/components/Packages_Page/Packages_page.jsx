import React, { useContext } from 'react'
import Hero_Packages_page from './Hero_Packages_page/Hero_Packages_page'
import MaldivesPackageDetails from './PackageDetails/MaldivesPackageDetails'
import AggatiPackageDetails from "./PackageDetails/AggatiPackageDetails"
import PageContext from '../../context/Page/PageContext'

export default function Packages_page() {
  const pageContext= useContext(PageContext);
  const {pack} = pageContext;
  return (
    <>
    <Hero_Packages_page pack ={pack}/>
    {(pack === "maldives" ) ?<MaldivesPackageDetails/> : (pack === "aggati") ? <AggatiPackageDetails/> : null}
    </>
  )
}
