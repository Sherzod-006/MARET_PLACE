
const RegisterTemplate = () => {

    // --------------------------------STYLES
    const logSpanStyle1 = "bg-gradient-to-r from-blue-800 via-red-600 to-amber-500 sm:text-transparent bg-clip-text"
    const logSpanStyle2 = "bg-gradient-to-r from-amber-500 via-red-600 to-blue-600 sm:text-transparent bg-clip-text"
  const customConStyle = "customContainer py-2 justify-center sm:justify-start md:justify-end p-2"
  return (
    <main className="
    lg:bg-[url(/src/assets/pc.jpg)] 
    sm:bg-[url(/src/assets/tablet.jpg)]
    bg-[url(/src/assets/phone.jpg)]
    bg-cover bg-center h-screen
    ">
      <div className={customConStyle}>
        <div className="flex items-center">
          <img src="./src/assets/Logo.png" alt="logo" className="md:h-30 h-15 pr-5" />
          <h1 className="text-blue-600 md:text-7xl sm:text-5xl text-3xl font-bold">
            <span class={logSpanStyle1}>Lion's</span> <span className={logSpanStyle2}>Company</span>
          </h1>
        </div>
      </div> 
    </main>
  )
}

export default RegisterTemplate
