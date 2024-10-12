'use  client'
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Avatar, Button, TextInput, Tooltip } from "flowbite-react";
import { format ,formatDistanceToNowStrict } from "date-fns";
import { TbArrowBackUp, TbThumbUp , TbMoodPlus} from "react-icons/tb";

const Comment = ({ comment }: any) => {
  const [showReply, setShowReply] = useState(false);
  return (
    <>
      <div className="mt-5 dark:bg-darkmuted rounded-0">
        <div className="flex gap-3  justify-start items-center">
        <div className="flex gap-3 items-center">
        <Avatar
        img="/images/profile/user-4.jpg"
        rounded
        size="xs"
        className="mr-0"
        color="gray"      />
            <div>
          <h6 className="font-medium text-ld">{comment?.user?.name}</h6>
          {/* <p className="text-xs"> {comment?.user?.title} </p> */}
          </div>
          </div>
          <div className="flex gap-2 items-center">
          <span className="h-2 w-2 rounded-full bg-dark opacity-40 dark:bg-white block"></span>
          {/* <p className="text-xs">{format(new Date(comment?.updated_at), "E, MMM d")}</p> */}

          <p className="text-xs">{formatDistanceToNowStrict(new Date(comment?.updated_at), {
                      addSuffix: true,
                    })} </p>
          
          </div>
        </div>
        <div className="py-2">
          <p className="text-ld">{comment?.body}</p>
        </div>
        <div className="relative w-fit gap-4 flex justify-start items-center">
          <Tooltip content="React">
            <Button
              color={"transperant"}
              className="btn-circle p-0 b-0 tranperant hover:bg-primary hover:text-white"
              onClick={() => setShowReply(!showReply)}
            >
              
              {/* <Icon icon="solar:undo-left-linear" height="16" /> */}
              <TbThumbUp size="16" />
              {/* <TbMoodPlus size="18" /> */}
            </Button>
          </Tooltip>
          <Tooltip content="Reply">
            <Button
              color={"transperant"}
              className="btn-circle p-0 b-0 hover:bg-secondary hover:text-white"
              onClick={() => setShowReply(!showReply)}
            >
              {/* <Icon icon="solar:undo-left-linear" height="16" /> */}
              {/* <TbThumbUp size="16" /> */}
              <TbArrowBackUp size="16" />
            </Button>
          </Tooltip>
        </div>
      </div>
      {comment?.replies ? (
        <>
          {comment?.replies?.map((reply:any) => {
            return (
              <div className="ps-8" key={reply.comment}>
                <div className="mt-5 p-5 bg-muted dark:bg-darkmuted rounded-lg">
                  <div className="flex gap-3 items-center">
                    <Avatar img={reply.profile.avatar} rounded size="sm" bordered
            color="gray"  />
                    <h6 className="text-base">{reply.profile.name}</h6>
                    <span className="h-2 w-2 rounded-full bg-dark dark:bg-white opacity-40 block"></span>
                    <p>{comment?.profile?.time}</p>
                  </div>
                  <div className="py-4">
                    <p className="text-ld">{reply.comment}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : null}
      {showReply ? (
        <div className="pb-5 px-5">
          <div className="flex gap-3 items-center">
            <div className="w-24">
              {/* <Avatar placeholderInitials={comment?.user?.name.charAt(0)} rounded size="sm" bordered
            color="gray" />  */}
            <Avatar
        img="/images/profile/user-2.jpg"
        rounded
        size="sm"
        className="mr-2"
      />
            </div>
            <TextInput className="form-control md:w-full w-fit" placeholder="Reply" />
            <Button color={"primary"} >Reply</Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Comment;
