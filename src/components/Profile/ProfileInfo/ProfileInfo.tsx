import s from './ProfileInfo.module.css'
import {ProfileStatus} from "./ProfileStatus";
import gitIcon from '../../../assets/imges/github-logo.png'
type ProfileInfoType = {
    profile:number | null
    UserStatus: string
    updateUserStatus:(NewStatus:string)=>void
}
export const ProfileInfo = (props: any) => {
    return (
        <div className={s.profileInfoContent}>
            <img className={s.profileUserPhoto} src={props.profile.photos.large}/>
            <div className={s.userName}>{props.profile.fullName}</div>
            <div className={s.contacts}>
                <div className={s.contactsTitle}> Контакты</div>
                <div><a  title="перейти на сайт" className={s.profileInfoLinks} target="_blank"
                         href='https://github.com/'> <img className={s.contactsIcon} src={gitIcon}/> {props.profile.contacts.github} </a></div>
                <div><a title="перейти на сайт" className={s.profileInfoLinks} target="_blank"
                        href='https://www.instagram.com/'> <img className={s.contactsIcon} src={'data:image/png;base64,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'}/>
                    {props.profile.contacts.instagram} </a></div>
                <div><a title="перейти на сайт" className={s.profileInfoLinks} target="_blank"
                        href='https://vk.com/'> <img className={s.contactsIcon} src={'https://e7.pngegg.com/pngimages/948/829/png-clipart-computer-icons-web-browser-vk-vk-logo-logo-monochrome-thumbnail.png'}/> {props.profile.contacts.vk} </a></div>
                <div><a title="перейти на сайт" className={s.profileInfoLinks} target="_blank"
                        href="https://www.google.com/maps/place/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@53.88464,27.5933684,11z/data=!3m1!4b1!4m6!3m5!1s0x46dbcfd35b1e6ad3:0xb61b853ddb570d9!8m2!3d53.9006011!4d27.558972!16zL20vMGRseGo?entry=ttu">
                    <img className={s.contactsIcon} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2D5bUC8N80KZ2cozxA3Gls5uzi4hZ6I0cAvgW7XlmOaq55Y0wRtDTAn63w-kJ9D27AXQ&usqp=CAU'/> Minsk</a></div>

            </div>


            <div title="изменить статус"><ProfileStatus UserStatus={props.UserStatus}
                                                        updateUserStatus={props.updateUserStatus}/></div>
            {/*<div className={s.yyy}>*/}
        </div>

        // </div>
    );
};