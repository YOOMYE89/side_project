import React from 'react'

const GridBox = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
        <div className="container">

            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>

            <div className="row justify-content-center">

                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="assets/img/portfolio/cabin.png" alt="..." />
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="assets/img/portfolio/cake.png" alt="..." />
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="assets/img/portfolio/circus.png" alt="..." />
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="assets/img/portfolio/game.png" alt="..." />
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="https://mblogthumb-phinf.pstatic.net/MjAyMDA1MjFfMjc4/MDAxNTkwMDI3Mzc4NzMy.k0Bpz8PjS-QwXIlMnZ-PEuWZpdCuOClgX88cb5i8ylkg.sDX0eJwkzgwyOD5GivuXabk679MYN1joBYXWMVAHdRYg.JPEG.ryuri666/%EB%B0%B0%EA%B7%9C%EB%A6%AC.jpg?type=w800" alt="..." />
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="assets/img/portfolio/submarine.png" alt="..." />
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default GridBox
