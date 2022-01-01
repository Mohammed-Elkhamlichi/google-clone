import React from "react";
import { useSearchContext } from "../Components/StateProvider";
import SearchHeader from "../Components/SearchHeader";
import useGoogleSearch from "../Components/useGoogleSearch";

import "../Styles/NewsPage.css";

const NewsPage = () => {
    const [state, dispatch] = useSearchContext();
    const { data } = useGoogleSearch(state.term);
    const gooleResponseData = data;
    return (
        <>
            <section className='search_section'>
                <SearchHeader />
                <div className='news__container'>
                    {gooleResponseData?.items.map((item, index) => {
                        return (
                            <a
                                rel='noreferrer'
                                target='_blank'
                                href={item.link}
                                className='news__item'
                            >
                                <div className='response__news__images'>
                                    {item.pagemap && item.pagemap.cse_image ? (
                                        <img
                                            className='news__image'
                                            src={`${item.pagemap.cse_image[0].src}`}
                                            alt=''
                                        />
                                    ) : (
                                        ""
                                    )}
                                </div>
                                {item.pagemap && item.pagemap.cse_image ? (
                                    <>
                                        <p className='news__snippet'>
                                            {item.snippet}
                                        </p>
                                        <a
                                            rel='noreferrer'
                                            target='_blank'
                                            href={item.link}
                                            className='news__detail'
                                        >
                                            Show More...
                                        </a>
                                    </>
                                ) : (
                                    ""
                                )}
                            </a>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default NewsPage;
