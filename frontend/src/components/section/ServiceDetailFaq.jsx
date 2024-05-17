import React from "react";

const ServiceDetailFaq = () => {

	

  return (
    <>
      <div className="accordion-style1 faq-page realtive mt-[30px] mb-6 min-[992px]:mb-12 ">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item active border-none rounded-[4px] overflow-hidden text-[#212529] bg-white">
            <h2 className="accordion-header border-none mb-0 max-[575.98px]:text-[20px] font-medium text-[#222] leading-[1.3125] mt-0 min-[576px]:text-[32px]" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                What methods of payments are supported?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                scelerisque volutpat nec sit vel donec. Sagittis, id volutpat
                erat vel.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Can I cancel at anytime?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                scelerisque volutpat nec sit vel donec. Sagittis, id volutpat
                erat vel.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                How do I get a receipt for my purchase?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                scelerisque volutpat nec sit vel donec. Sagittis, id volutpat
                erat vel.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
              >
                Which license do I need?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                scelerisque volutpat nec sit vel donec. Sagittis, id volutpat
                erat vel.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
              >
                How do I get access to a theme I purchased?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
                scelerisque volutpat nec sit vel donec. Sagittis, id volutpat
                erat vel.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailFaq;