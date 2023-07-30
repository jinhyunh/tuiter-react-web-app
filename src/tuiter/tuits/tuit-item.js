import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BsFillChatFill } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa6";
import { BsFillHeartFill } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";


import { useDispatch } from "react-redux";
import { tuitLikedToggle, deleteTuit } from "../reducers/tuits-reducer";
import "./index.css";

const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
            "image": "tesla.png"
        }
    }
) => {
    const dispatch = useDispatch();
    const toggleTuitLiked = (tuit) => {
        dispatch(tuitLikedToggle(tuit))
    }
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img alt="None" width={45} height={45} className="float-end rounded-circle" src={`/images/${tuit.image}`} />
                </div>
                <div className="col-10">
                    <div>
                        <GrFormClose className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)} />
                    </div>
                    <div>
                        <span className="fw-bolder wd-padded-right">{tuit.userName}</span>
                        <BsFillPatchCheckFill className="text-primary" />
                        <label className="wd-padded-left">{tuit.handle}</label>
                        <BsDot />
                        {tuit.time}
                    </div>
                    <div>
                        {tuit.tuit}
                    </div>
                    <div className="row">
                        <span className="col-3">
                            <BsFillChatFill />
                            <label className="wd-padded-left">
                                {tuit.replies}
                            </label>
                        </span>
                        <span className="col-3">
                            <FaRetweet />
                            <label className="wd-padded-left">
                                {tuit.retuits}
                            </label>
                        </span>
                        <span style={{ "cursor": "pointer" }} onClick={() => toggleTuitLiked(tuit)} className="col-3" >
                            <BsFillHeartFill className={tuit.liked ? "wd-red-like" : "wd-no-like"} />
                            <label className="wd-padded-left">
                                {tuit.likes}
                            </label>
                        </span>
                        <span className="col-3">
                            <FiShare />
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;