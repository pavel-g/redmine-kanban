import React from 'react'
import {CustomCardUserModel} from "../models/custom-card-user-model";

export const CustomCardUserField = (props?: {user: CustomCardUserModel|null}): JSX.Element => {
  if (!props?.user) {
    return <></>
  } else {
    return (
      <div>{props.user.label}: {props.user.username}</div>
    )
  }
}