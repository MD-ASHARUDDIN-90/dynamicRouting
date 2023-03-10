import style from './TweetBox.module.css'
import CustomButton from "../../Atom/CustomButton/CustomButton";
import TextArea from "../../Atom/TextArea/TextArea";
import { RxAvatar } from "react-icons/rx";
import { MdOutlinePoll } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiGallery } from "react-icons/tfi";
import { TbCalendarStats } from "react-icons/tb";
import { AiOutlineFileGif } from "react-icons/ai";
import { IoEarthSharp } from "react-icons/io5";
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { Thread } from '../../RecoilState/Thread/Thread';
import { ThreadofMinePOst } from '../../RecoilState/Thread/Thread';
import { CommentReplyState } from "../../RecoilState/CommentReplyState/CommentReplyState"
import { myCommentReplyState} from "../../RecoilState/CommentReplyState/myCommentReplyState";

export default function CommentBox({replyToName}) {
const matchedUserData = JSON.parse(localStorage.getItem("matchedUser"))
  const threadUserName = useRecoilValue(Thread)
  const [newReply ,setNewReply] = useRecoilState(CommentReplyState)
  const [newMyReply ,setMyNewReply] = useRecoilState(myCommentReplyState)
  console.log(threadUserName , " I am from thread box")

    const [tweetReply, setTweetRelpy] = useState("");
    const [show, setShow] = useState(false);
    //const [tweetPost,setTweetPost] = useRecoilState(UserPost)

    function handleTweet(e) {
        setTweetRelpy(e.target.value);
        //console.log(e.target.value ,"i am from midtweetbox")
      }
      function handleShow() {
        setShow(true);
      }
      function handleTweetPost() {
         alert("i am twet")
        const myReply = {
          name : matchedUserData.Name,
          handlerName :  matchedUserData.Name,
          tweetReplyText : tweetReply
         }
     setNewReply([myReply,...newReply])
        setTweetRelpy("")
        setMyNewReply([myReply,...newMyReply])
      }
    return(
        <>
        <div onClick={handleShow} className={style.subContainer}>
        <RxAvatar className={style.avatar} />
        <div className={style.input}>
          {show ? (
            <CustomButton
              className={style.evryOnebtn}
              buttonText= {`Replying to ${replyToName}`}
            />
          ) : (
            ""
          )}
          <TextArea
            placeholder="Tweet your reply"
            value={tweetReply}
            onChange={handleTweet}
            className={style.inputBox}
          />
        </div>
      </div>

     

      <div className={style.iconBtnWrapper}>
        <div className={style.iconBtn}>
          <TfiGallery className={style.iconss} />
          <AiOutlineFileGif className={style.iconss} />
          <MdOutlinePoll className={style.iconss} />
          <TbCalendarStats className={style.iconss} />
          <TfiLocationPin className={style.iconss} />
        </div>
        <CustomButton onClick={handleTweetPost} className={style.tweetPushbtn} buttonText="Tweet" />
      </div>

      
      
      
   
        
        </>
    )
}