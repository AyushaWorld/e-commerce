import React from 'react'

export const FooterComponents = () => {

  return (
    <>
        <div class="container-fluid  py-4 px-sm-3 px-md-5" style={{background: "#c4c4c4"}}>
            <div class="row">
                <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                    <p class="m-0">© {new Date().getFullYear()} All Right Reserved by Usha Thapa. </p>
                </div>
                <div class="col-lg-6 text-center text-md-right">
                    <p class="m-0">E-Commerce Site - making websites with Bootstrap.</p>
                </div>
            </div>
        </div>
    </>
  )
}
