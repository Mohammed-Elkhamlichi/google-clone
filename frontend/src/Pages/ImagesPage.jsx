import React from "react";
import { useSearchContext } from "../Components/StateProvider";
import SearchHeader from "../Components/SearchHeader";
import useGoogleSearch from "../Components/useGoogleSearch";

import "../Styles/ImagePage.css";

const ImagesPage = () => {
    const [state, dispatch] = useSearchContext();
    const { data } = useGoogleSearch(state.term);
    const gooleResponseData = data;
    return (
        <>
            <section className='search_section'>
                <SearchHeader />
                <div className='images__container'>
                    {gooleResponseData?.items.map((item, index) => {
                        return (
                            <a href={item.link} className='images__item'>
                                <div className='response__image'>
                                    {item.pagemap && item.pagemap.cse_image ? (
                                        <img
                                            className='image'
                                            src={`${item.pagemap.cse_image[0].src}`}
                                            alt=''
                                        />
                                    ) : (
                                        ""
                                    )}
                                </div>
                                {item.pagemap && item.pagemap.cse_image ? (
                                    <h3 className='images__item__title'>
                                        {item.displayLink}
                                    </h3>
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

export default ImagesPage;
