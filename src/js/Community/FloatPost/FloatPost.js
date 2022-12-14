import React from 'react';
import Slider from "react-slick";
import './FloatPost.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummy from "js/Community/Dummy/Dummy"
import profile from 'images/profile.svg';
import fire from 'images/fire.svg';
import arrow from 'images/arrow.svg';
import { Link } from 'react-router-dom';

const FloatPost = () => {
    console.log(dummy);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    return (
        <div id="content">
            <div id="waiting">답변을 기다리고 있어요<img src={fire} alt="" /><img src={arrow} alt="" /></div>
            <Slider {...settings}>
                {dummy.contents.map((contents) => (
                    <Link to={`${contents.id}`} key={contents.id}>
                        <div key={contents.id}>
                            <div className="list">
                                <div className="detail">
                                    <div className="writer-info">
                                        <img src={profile} alt="" style={{ width: "45px" }} />
                                        <div className='writer'>{contents.writer}</div>
                                    </div>
                                    <div className="inner">
                                        <div className="tag">#{contents.tag}</div><br />
                                        <div className="title">{contents.title}</div><br />
                                        <div>{contents.summary.length > 20 ? `${contents.summary.slice(0, 25)}...` : contents.summary}</div><br />
                                        <div className="under"><span className="gray">프로틴</span> <span className="bold">{contents.proteen}g</span> <span className="gray">댓글</span> <span className="bold">{contents.comment.length}개</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    );
}

export default FloatPost;