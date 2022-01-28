import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllRingForBasket, getSaveUrlConfig } from '../../store/selectors/selectors';
import { URL_POST_QUERY } from '../../utils/constants';
import { urlApp } from '../AuxiliaryButton/AuxiliaryButton';
import { THREEKIT_PARAMS } from '../PlayerThreeKit/PlayerThreeKit';

import s from './ShareModal.module.scss'
export const ShareModal = ({ ...props }) => {
    const { closeFunc } = props;
    const [copyLink, setCopyLink] = useState(false)

    const activeSettingItems = useSelector(getAllRingForBasket);


    const search = useLocation().search;
    const type = new URLSearchParams(search).get('type');


    const saveIdConfig = useSelector(getSaveUrlConfig);
    let urlParams = window.location;
    // let saveUrl: string = `${urlParams.origin}${urlParams.pathname}?type=${type}&sku=${saveIdConfig}`;
    let saveUrl: string = `${urlApp}?type=${type}&sku=${saveIdConfig}`;

    // console.log(`https://preview.threekit.com/api/configurations/${saveIdConfig}/thumbnail?bearer_token=57a7c191-9722-4928-a093-e47e76925ebd`);
    let imgPhoto = `https://preview.threekit.com/api/configurations/${saveIdConfig}/thumbnail?bearer_token=${THREEKIT_PARAMS['authToken']}`;


    let classDoneSave = `${s.done_saved} `
    if (copyLink) classDoneSave += `${s.done_saved_active}`
    useEffect(() => {
        if (copyLink) {
            navigator.clipboard.writeText(saveUrl).then(() => {
                setTimeout(() => {
                    classDoneSave = `${s.done_saved} `
                }, 2000);

                setTimeout(() => {
                    setCopyLink(false)
                }, 2600);
            })

        }

    }, [copyLink]);

    let dataRing = activeSettingItems.activeListElement.map((item: any) => {
        return {
            name: item[0]['name'],
            subName: item[0]['subName'],
        }
    })

    type platformT = 'facebook' | 'twitter' | 'pinterest'
    type onShareSocialT = { platform: platformT }
    const onShareSocial = ({ platform }: onShareSocialT) => {
        let objConfig = {
            "type": "SOCIAL_SHARE",
            "data": {
                "url": saveUrl,
                "platform": platform,
                "image": imgPhoto,
                "listRing": dataRing,
            }
        }
        console.log(objConfig);

        window.parent.postMessage(JSON.stringify(objConfig), URL_POST_QUERY);

        closeFunc()

    }

    return (
        <>
            <div className={s.wrapShare}>
                <div className={s.header}>
                    <div className={s.text}>Share link below</div>
                </div>
                <div className={s.inputContainer}>
                    <input type="text" value={saveUrl} />
                </div>
                <button className={`${s.btn} ${s.btn_white} `} onClick={() => {
                    setCopyLink(true)
                }} >Copy link</button>

                <div className={`${s.header} ${s.header_social}`}>
                    <div className={s.text}>Share on Social</div>
                </div>

                <div className={s.wrapSocial}>
                    <div className={s.box}>
                        <div className={s.social_item} onClick={() => onShareSocial({ platform: 'facebook' })}>
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33 16.5C33 7.3873 25.6127 0 16.5 0C7.3873 0 0 7.3873 0 16.5C0 24.7355 6.03378 31.5617 13.9219 32.7996V21.2695H9.73242V16.5H13.9219V12.8648C13.9219 8.72953 16.3853 6.44531 20.1542 6.44531C21.9589 6.44531 23.8477 6.76758 23.8477 6.76758V10.8281H21.7671C19.7175 10.8281 19.0781 12.1001 19.0781 13.4062V16.5H23.6543L22.9228 21.2695H19.0781V32.7996C26.9662 31.5617 33 24.7355 33 16.5Z" fill="white" />
                            </svg>
                        </div>
                        <div className={s.social_item} onClick={() => onShareSocial({ platform: 'pinterest' })} >
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 0C7.38633 0 0 7.38633 0 16.5C0 23.4932 4.35059 29.4615 10.4865 31.8656C10.3447 30.5572 10.2094 28.5592 10.5445 27.1348C10.8475 25.8457 12.4781 18.9363 12.4781 18.9363C12.4781 18.9363 11.9818 17.9502 11.9818 16.4871C11.9818 14.1926 13.3096 12.4781 14.966 12.4781C16.3711 12.4781 17.0543 13.5352 17.0543 14.8049C17.0543 16.2229 16.152 18.3369 15.6879 20.2963C15.3012 21.9398 16.5129 23.2805 18.1307 23.2805C21.0633 23.2805 23.3191 20.1867 23.3191 15.7266C23.3191 11.7756 20.4832 9.01055 16.4291 9.01055C11.7369 9.01055 8.97832 12.5297 8.97832 16.1713C8.97832 17.5893 9.52617 19.1104 10.2094 19.9354C10.3447 20.0965 10.3641 20.2447 10.3254 20.4059C10.2029 20.9279 9.91934 22.0494 9.86777 22.275C9.79688 22.5779 9.6293 22.6424 9.31348 22.4941C7.25098 21.5338 5.96191 18.5238 5.96191 16.1004C5.96191 10.8926 9.74531 6.1166 16.8609 6.1166C22.5844 6.1166 27.0316 10.1965 27.0316 15.6492C27.0316 21.334 23.448 25.9102 18.4723 25.9102C16.8029 25.9102 15.2303 25.04 14.6889 24.0152C14.6889 24.0152 13.8639 27.167 13.6641 27.9404C13.2902 29.3713 12.2848 31.1695 11.6145 32.2652C13.1613 32.7422 14.7984 33 16.5 33C25.6137 33 33 25.6137 33 16.5C33 7.38633 25.6137 0 16.5 0Z" fill="white" />
                            </svg>
                        </div>
                        <div className={s.social_item} onClick={() => onShareSocial({ platform: 'twitter' })} >
                            <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3815 26.9063C22.8312 26.9063 29.6426 16.5893 29.6426 7.64509C29.6426 7.35505 29.6362 7.05857 29.6233 6.76853C30.9483 5.81029 32.0918 4.62338 33 3.26357C31.766 3.81261 30.4558 4.17118 29.1141 4.32704C30.5268 3.48028 31.5845 2.15005 32.0912 0.58296C30.7623 1.37055 29.3089 1.92612 27.7935 2.22587C26.7724 1.14093 25.4224 0.422565 23.9521 0.181851C22.4818 -0.0588642 20.9731 0.191475 19.6594 0.894163C18.3456 1.59685 17.3 2.71275 16.684 4.06933C16.0681 5.42592 15.9162 6.94763 16.2519 8.39919C13.5609 8.26416 10.9284 7.56512 8.52497 6.34742C6.12154 5.12971 4.00083 3.42051 2.30033 1.33062C1.43605 2.82074 1.17158 4.58404 1.56067 6.26216C1.94976 7.94027 2.96321 9.40727 4.39506 10.365C3.32011 10.3309 2.26872 10.0415 1.32773 9.52067V9.60446C1.32677 11.1682 1.86738 12.6841 2.85768 13.8943C3.84797 15.1046 5.22682 15.9346 6.75984 16.2431C5.76408 16.5156 4.71898 16.5553 3.70541 16.3592C4.138 17.704 4.97966 18.8803 6.11293 19.7237C7.24621 20.5672 8.61454 21.0359 10.027 21.0642C7.62908 22.9478 4.66699 23.9695 1.61777 23.9646C1.07702 23.9638 0.536799 23.9307 0 23.8654C3.09768 25.8527 6.70111 26.9082 10.3815 26.9063Z" fill="white" />
                            </svg>

                        </div>
                    </div>

                </div>
            </div>
            <div className={classDoneSave}>
                <div className="">
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5.5 9.5L14 1" stroke="black" />
                    </svg>
                </div>
                <span>Link copied</span>
            </div>
        </>
    )
}
