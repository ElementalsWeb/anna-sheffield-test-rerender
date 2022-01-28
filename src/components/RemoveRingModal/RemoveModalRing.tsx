
import s from './RemoveModalRing.module.scss'

export const RemoveModalRing = ({ ...props }) => {

    const { closeFunc, modalInfoArray, buttonFunction, selectAnotherRing } = props; 

    let mainClass = `${s.main_section}`
    if(selectAnotherRing){
        mainClass += ` ${s.select}`;
    }
    return (
        <div className={`${s.modal}`}>
            {modalInfoArray['capitalTitle'] && <span>{modalInfoArray['capitalTitle']}</span>}
            <header>{modalInfoArray['title']}</header>
            <main className = {mainClass}>
                <button className={`${s.btn} ${s.btn_black}`} onClick={() => closeFunc()}>{modalInfoArray['blackButton']}</button>
                <button className={`${s.btn} ${s.btn_white} `} onClick={() => buttonFunction()}>{modalInfoArray['whiteButton']}</button>
            </main>
        </div>
    )
}
