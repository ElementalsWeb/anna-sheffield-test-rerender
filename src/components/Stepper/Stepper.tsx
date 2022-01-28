import React from "react";
import { useSelector } from "react-redux";
import { LongArrowStepper } from "../../assets/LongArrowStepper";
import { LongArrowStepperFinish } from "../../assets/LongArrowSteperFinish";
import { activeStepConfig } from "../../store/interface";
import { getCountActiveRing,getStepConfig } from "../../store/selectors/selectors";
import { LongStepperArrowMobile } from "../../assets/LongStepperArrowMobile";
import { ShortStepperArrowMobile } from "../../assets/ShortStepperArrowMobile";
import  FirstShortStepperMobile  from "../../assets/FirstShortStepperMobile";
import { FirstLongStepperMobile } from "../../assets/FirstLongStepperMobile";
import s from "./Stepper.module.scss";


interface stepInterf {
  name: string;
  description: string;
  mobileDescription:string;
}



export const steps: stepInterf[] = [
  {
    name: "1",
    description: "Start with Engagement Ring or Ceremonial band",
    mobileDescription: "Start with Ceremonial band",
  },
  {
    name: "2",
    description: "Select Nesting bands",
    mobileDescription: "Select Engagement Ring or Nesting bands",
  },
  {
    name: "3",
    description: "Finish your suite! Choose size and add to cart",
    mobileDescription: "Finish your suite!Choose size and add to cart",
  },
];
 
export const Stepper = () => {

  let stepActive: number;
  let stepper = `${s.stepper}`;
  const stepConfig: activeStepConfig = useSelector(getStepConfig); 
  const countActiveRings = useSelector(getCountActiveRing);

  if (countActiveRings < 1) {
    stepActive = 1;
  }else {
    stepActive = 2;
  } 
  if(stepConfig === 'basket'){
    stepActive = 3;
    stepper += ` ${s.basket}`
  }
  if(stepConfig === 'config'){
    stepper += ` ${s.config}`;
  }
  return (
    <div className={stepper}>
      {steps.map((step: stepInterf) => {
        let isActiveStep = Number(step.name) === stepActive;

        let wrapStepClass = `${s.stepper_wrap}`;
        if (isActiveStep) wrapStepClass += ` ${s.active}`;

        return (
          <div className={wrapStepClass}>
            <div className={s.step}>
              <span>{step.name}</span>
              <div className={s.text}>{step.description}</div>
              <div className={s.textMobile}>{step.mobileDescription}</div>
            </div> 
            {["1", "2"].includes(step.name) ? (
               <>
                <LongArrowStepper className={s.LongArrowStepper}/>
               <div className={s.ShortArrowStepper}>
                  {
                   (step['name'] === "1" && isActiveStep) ?
                    (
                    <div className={s.ShortArrowStepper}>
                      <FirstLongStepperMobile/>          
                    </div> 
                    )
                    : (step['name'] === "1") ? 
                    (
                    <div className={s.LongArrowStepperMobile}>
                       <FirstShortStepperMobile/>
                    </div>
                    )
                    : isActiveStep ? 
                    (
                    <div className={s.LongArrowStepperMobile}>
                      <LongStepperArrowMobile/> 
                    </div>
                    )
                    : 
                    (
                    <div className={s.ShortArrowStepper}>
                      <ShortStepperArrowMobile />
                    </div>
                    )
                  }
               </div>
               </>
            ) : (
              <>
               <LongArrowStepperFinish className={s.LongArrowStepper}/>
               { isActiveStep ?
               <div className={s.LongArrowStepperMobileFinish}>
                  <LongStepperArrowMobile /> 
               </div>
               : 
               <div className={s.ShortArrowStepper}>
                  <ShortStepperArrowMobile />
               </div>}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};