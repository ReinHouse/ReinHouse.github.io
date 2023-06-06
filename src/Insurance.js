import React from "react";
import styles from "./Insurance.css";
import CallToAction from "./CallToAction";

const Insurance = () => (
    <div class="insurance-container">
      <div class="dark-overlay-ins">
      <h1 class="insurance-header">Claims Process</h1>
        <hr id="ins-hr"></hr>
        <div class="claims-wrapper">
          <p class="ins-exp">We understand the entire insurance process and will work with you and your insurance company to restore your home to better than it was before the damage.</p>
          <ol class="claims-steps">
            <li class="pad-li">You contact ReinHouse Design to have a complimentary roof inspection performed by a trained professional. If you have roof damage we will recommend that you file a claim.</li>
            <li class="pad-li">You will file a claim with your insurance carrier's claims office. You'll let them know that Reinhouse Design inspected the roof and found evidence of hail or wind damage.</li>
            <li class="pad-li">You'll let us know when you're meeting with the insurance adjuster. We'll be there to meet with the insurance adjuster, and provide a detailed assessment.</li>
            <li class="pad-li">We'll work with the insurance company to finalize scope of work and pricing.</li>
            <li class="pad-li">The only thing you'll pay is your deductible (and any upgrades you decide to make in the process).</li>
            <li class="pad-li">The scope of work is scheduled and the work completed. Your insurance company is invoiced and depreciation released to you.</li>
            <li>Upon completion of construction and full payment to Reinhouse Design, your warranty and paid in full receipt will be sent.</li>
          </ol>
        </div>
        <h1 class="learn-more">Learn More</h1>
        <hr id="ins-hr"></hr>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button id="acc-head" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                FILING THE CLAIM
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <p class="acc-exp">Contact the property claims department by phone or online. Tell them about the weather event and damage that occured.</p>
                <p class="acc-exp">The claim handler will assign a claim number and a claims adjuster.</p>
                <p>Write this number down as it will be very important throughout the entire process. Be sure to ask for their cell phone number when he or she calls to schedule the inspection. Contact your Reinhouse Design representative and provide the adjuster's name, contact info and appointment time. You could invest your time assisting the insurance company in getting the lowest price, they will ask you to go to different contractors in order to get the lowest price. The result is the insurance company keeps the savings. We will negotiate with the insurance carrier for a fair insurance re-roof settlement, and you'll get the best roofing.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button id="acc-head" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                MEETING WITH THE ADJUSTER
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
              <div class="accordion-body">
                <p class="acc-exp">Inform your adjuster that you will have your roofing contractor present at the meeting. It is highly important for your Reinhouse Design representative to attend the inspection meeting and serve as your advocate. As much as they appreciate your business, the insurance carriers must seek to keep their expenditures down. Inspecting the roof together will help establish the presence and accurate assessment of the extent of the damages. Most adjusters will request the name of the roofer with whom they will be meeting because they understand your situation and want to be fair to you.</p>
                <p>Measurements and photos of the roof and other damages will be taken at that time, by us and the insurance company. We do our job well so you can be respresented well and treated fairly during inspection.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button id="acc-head" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                ENSURING A FAIR SETTLEMENT
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body">
                <p class="acc-exp">Once the insurance adjuster assesses the extent of damages, he or she will generate a claim summary detailing the scope of repairs or replacement. Depending on the schedule, seniority and authority of the field adjuster, this claim summary may be provided to you at the initial meeting or will go through a submission and approval process. It should not take more than two weeks to obtain the claim summary. They are often uploaded digitally into an online account you set up or mailed to your address on file. It is a good idea to confirm your mailing address with the adjuster to avoid delays in receiving this important document.</p>
                <p class="acc-exp">Most insurance carriers use Xactimate pricing software to determine the fair market price of your roof replacement. To simplify matters, we also use Xactimate to generate our estimate for your project, so the pricing per unit should be the same as your insurance carrier. When you receive the adjuster's claim summary we will compare it to our own to make sure nothing has been omitted from the scope of the project. If there is a difference in our estimate and that of the insurance company's estimate, it will be solely on the scope of the project, not per unit pricing.</p>
                <p class="acc-exp">In the event that there is a discrepancy between our assessment of the scope of the repairs needed to restore your home to pre-storm condition and their assessment of the same, our insurance liaison will negotiate the difference with the insurance company on your behalf. (You will not need a crash course in roofing components and measurements to try to explain why omitted key items are necessary in the replacement of your roof.) In most cases this will be a simple process of faxing or emailing them our estimate and calling them to discuss the differences. We are very familiar with what each insurance company is currently approving and do not submit frivolous supplements that delay your new roof installation. That would be a disservice to all parties.</p>
                <p>That being said, certain insurance companies are less willing to fund key components of your new roof. A quick phone call from you may be helpful. If that happens, we will discuss our options and develop the best plan of action for your claim situation. Once the negotiation process has been completed, the insurance company will release a supplemental check to cover the additional amount that was determined through negotiations with the insurance representative.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
              <button id="acc-head" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                FUNDING
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
              <div class="accordion-body">
                <p class="acc-exp">You should receive the initial check about the same time the claim summary arrives. It will have your name and your mortgage company's name on it, in which case you would need to contact them to find out the proper procedure for getting their endorsement. Each company has specific directions to follow. There are usually multiple documents required by the mortgage company to provide their endorsement. Some will be from you and others from us, as your contractor. This process can take up to 10 days if all goes smoothly.</p>
                <p class="acc-exp">The initial check may seem small compared to the full amount of the roof. There are two reasons for this- your deductible and the depreciation. Most homeowners choose the Replacement Cost coverage type of policy over the Actual Cost Value policy. If you have a replacement cost policy, at the proper time we will facilitate the recovery of the depreciation initially withheld by the insurance company. Recovery of depreciation is done after the work has been completed. The deductible is the portion withheld by the insurance company that will not be paid out to you at any time.</p>
                <p>The deductible is your co-pay, which you will pay to Reinhouse Design. The full cost of the roof replacement is the sum of the first insurance check, your deductible, the amount of depreciation and any approved supplements.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
              <button id="acc-head" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                ROOF INSTALLATION
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
              <div class="accordion-body">
                <p>Once the first insurance check, deductible and most up to date insurance claim summary are made available, the roof will be installed using the shingle of your choice.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingSix">
              <button id="acc-head" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                RECOVERING THE DEPRECIATION
              </button>
            </h2>
            <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
              <div class="accordion-body">
                <p class="acc-exp">After the roof has been installed, our office will provide the necessary documentation to the insurance company to let them know the work is complete. If our company is overseeing the non-roofing repairs as well, this invoice is not sent to the insurance company until all repairs are complete. If the depreciation withheld is recoverable, we will ask for the release of those funds. The insurance company will most likely call you to confirm that the project is complete and will then release the last check to you. It is possible that if a supplement was negotiated that it may be included in the final check along with the depreciation. Our office will make the appropriate number of follow up calls to confirm receipt of this documentation and ensure timely processing of the depreciation. Depending on the volume of claims, an insurance company can take from one day to three weeks to process recoverable depreciation.</p>
                <p>Buyer Beware- If you have been approached by a contractor with a lower bid than the amount allowed on your insurance loss statement, your insurance company will not allow you to keep those savings. They will lower their price to match the contractor's. Either you or that contractor would have to provide a false invoice to the insurance carrier to recover the full depreciation. Otherwise, the difference in the lower price and the original will be deducted from the final depreciation check. Insurance companies are not in the habit of overfunding roof replacements. If a contractor has offered to lie to your insurance company on the real price of the roof, he is including you as a counterpart to insurance fraud. The State of Colorado has clearly defined this as illegal in Senate Bill 38 that was adopted into law.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
              <button id="acc-head" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                FINAL PAYMENT
              </button>
            </h2>
            <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
              <div class="accordion-body">
                <p>Once you receive your last insurance check, secured the mortgage company endorsements needed, we will collect the final amount due on the roof. As a courtesy to our clients we provide a 30-day grace period from roof installation to make the final payment on the depreciated amount. This is usually enough time to complete this process. Special allowances can be made on an as-needed basis if this process is delayed due to the actions of the insurance company or mortgage company.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
export default Insurance;