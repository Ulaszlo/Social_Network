import React, {ChangeEvent} from 'react';
import s from './ProfileStatus.module.css'
type ProfileStatusType={
    UserStatus:string
    updateUserStatus:(NewStatus:string)=>void
}
export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        UserStatus:this.props.UserStatus,

    }
    activateEditMode=()=>{
        this.setState({
            editMode:true,
        })
        // this.state.editMode=true
    }
    deActivateEditMode=()=>{
        this.setState({
            editMode:false,
        })
        // this.state.editMode=false
        this.props.updateUserStatus(this.state.UserStatus)
    }
    onStatusChanged=(e:ChangeEvent<HTMLInputElement>)=>{
      this.setState({
          UserStatus:e.currentTarget.value
      })
    }

    render() {
        return<div className={s.profileStatus}>
            {!this.state.editMode ? <div><span  onDoubleClick={this.activateEditMode}>{this.state.UserStatus}</span></div> :
                <div><div className={s.aboutMe}>О себе:</div>
                    <input onChange={this.onStatusChanged} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.UserStatus} /></div>}


        </div>
    }
}
