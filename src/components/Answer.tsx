import { createRef, useEffect, useState } from "react";

interface AnswerProps {

    userIcon: string;
    userName: string;
    isCurrentUser: boolean;
    answerDate: string;
    answerContent: string;
    className: string;
}
export default function Answer({ className, userIcon, userName, isCurrentUser, answerContent, answerDate }: AnswerProps) {
    const [postComment, setPostComment] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const answerRef = createRef<HTMLDivElement>();

    useEffect(() => {
       //get last line of the answer
         const lastLine = answerRef.current?.textContent?.split('\n').pop();
         console.log(lastLine);
    }, []);
    return <div className={className}>
        <div>
            <div className="flex flex-col gap-3">
                <div className="flex w-full justify-between">
                    <div className="flex flex-row gap-4">
                        <img src={userIcon} className="h-12 w-12" />
                        <div>
                            <div className="font-poppins font-bold text-[#0F0F0F]">{userName} <label className="font-poppins font-[500] text-[#0F0F0F]">{isCurrentUser ? '(You)' : ''}</label></div>
                            <div className="font-poppins text-[15px] text-[#0F0F0F]">{answerDate}</div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.2 18.1H0.8C0.3575 18.1 0 18.4575 0 18.9V19.8C0 19.91 0.09 20 0.2 20H19.8C19.91 20 20 19.91 20 19.8V18.9C20 18.4575 19.6425 18.1 19.2 18.1ZM3.6425 16C3.6925 16 3.7425 15.995 3.7925 15.9875L7.9975 15.25C8.0475 15.24 8.095 15.2175 8.13 15.18L18.7275 4.5825C18.7507 4.55937 18.7691 4.5319 18.7816 4.50166C18.7942 4.47141 18.8006 4.43899 18.8006 4.40625C18.8006 4.37351 18.7942 4.34109 18.7816 4.31084C18.7691 4.2806 18.7507 4.25313 18.7275 4.23L14.5725 0.0725C14.525 0.025 14.4625 0 14.395 0C14.3275 0 14.265 0.025 14.2175 0.0725L3.62 10.67C3.5825 10.7075 3.56 10.7525 3.55 10.8025L2.8125 15.0075C2.78818 15.1414 2.79687 15.2793 2.83782 15.4091C2.87877 15.5389 2.95074 15.6568 3.0475 15.7525C3.2125 15.9125 3.42 16 3.6425 16Z" fill="#0F0F0F" />
                        </svg>
                        <div className="font-poppins font-bold text-[#0F0F0F]">Edit</div>

                    </div>
                </div>
                <div className="">
                    <p ref={answerRef}  className="font-poppins  after:text-white text-[18px] text-clip text-[#0F0F0F] ">{
                        showMore ? answerContent : answerContent.slice(0, 400)+'...'
                    }
                     <label className="font-poppins font-bold text-[#0F0F0F]" onClick={
                        () => {
                            setShowMore(!showMore);
                        }
                     }>{
                        showMore ? 'Show Less' : 'Show More'
                     }</label></p>
                </div>
                <div className="flex flex-wrap flex-row sm:ml-[58px] ml-0 gap-3">
                    <button className="flex gap-1 items-center text-[20px]">
                        <svg width="26" height="26" viewBox="0 0 26 26"  xmlns="http://www.w3.org/2000/svg">
                            <path  d="M12.9408 1.52556L12.5228 0.740708L12.9395 1.52556H12.9408ZM23.9167 13.0659L23.0115 17.8099L24.9077 18.1076L25.8116 13.3635L23.9167 13.0659ZM14.9536 23.755H8.99326V25.4992H14.9536V23.755ZM7.82529 22.7818L6.78424 11.8601L4.86753 12.0101L5.90986 22.9318L7.82529 22.7818ZM23.0115 17.8099C22.3615 21.2168 18.9742 23.755 14.9536 23.755V25.4992C19.8589 25.4992 24.0897 22.3958 24.9077 18.1076L23.0115 17.8099ZM14.9665 4.97661L14.1164 9.67994L16.0139 9.96132L16.8639 5.25916L14.9665 4.97661ZM7.18809 10.9601L9.033 9.51831L7.77657 8.19743L5.93422 9.63924L7.18809 10.9601ZM12.3882 4.82778L12.9985 2.69529L11.1369 2.2581L10.5266 4.38942L12.3882 4.82778ZM13.919 2.2767L14.1049 2.33135L14.6934 0.670943L14.5075 0.616294L13.919 2.2767ZM11.4638 6.97189C11.8643 6.29283 12.1746 5.57311 12.3882 4.82778L10.5266 4.38942C10.3513 5.00177 10.0966 5.59309 9.76764 6.15099L11.4651 6.97189H11.4638ZM14.1049 2.33135C14.2878 2.38163 14.4538 2.47301 14.5874 2.59701C14.721 2.72101 14.8178 2.8736 14.869 3.04063L16.7306 2.60344C16.5981 2.15153 16.3417 1.73737 15.9853 1.39948C15.6289 1.0616 15.1853 0.810979 14.6934 0.670943L14.1049 2.33135ZM12.9985 2.69529C13.024 2.61151 13.0693 2.53377 13.1313 2.4675C13.1933 2.40123 13.2705 2.34802 13.3575 2.31158L12.5228 0.740708C11.8408 1.03837 11.3279 1.58952 11.1369 2.2581L12.9985 2.69529ZM13.3575 2.31158C13.5329 2.23558 13.7337 2.2231 13.919 2.2767L14.5075 0.616294C13.8527 0.425974 13.1425 0.4705 12.5228 0.740708L13.3562 2.31158H13.3575ZM16.1191 11.8182H22.7602V10.0741H16.1191V11.8182ZM16.8639 5.25916C17.0239 4.37515 16.9784 3.4706 16.7306 2.60344L14.869 3.04179C15.0497 3.67354 15.0829 4.33255 14.9665 4.97661L16.8639 5.25916ZM8.99326 23.755C8.69968 23.7546 8.41693 23.6544 8.20075 23.4743C7.98456 23.2941 7.85061 23.0471 7.82529 22.7818L5.90986 22.9318C5.97657 23.632 6.33023 24.284 6.90104 24.7593C7.47186 25.2346 8.21836 25.4986 8.99326 25.4992V23.755ZM9.033 9.51831C9.90482 8.83694 10.8433 8.02651 11.4651 6.97189L9.76764 6.15099C9.32404 6.90561 8.61633 7.54164 7.77657 8.19743L9.033 9.51831ZM25.8116 13.3635C25.8888 12.96 25.8677 12.5461 25.75 12.1508C25.6323 11.7554 25.4206 11.3882 25.1299 11.0748C24.8392 10.7615 24.4765 10.5095 24.0672 10.3367C23.6578 10.1638 23.2118 10.0742 22.7602 10.0741V11.8182C23.4872 11.8182 24.0423 12.4136 23.9167 13.0659L25.8116 13.3635ZM14.1164 9.67994C14.0687 9.94339 14.0846 10.2131 14.1633 10.4704C14.2419 10.7277 14.3813 10.9664 14.5718 11.17C14.7624 11.3735 14.9994 11.537 15.2666 11.6492C15.5338 11.7613 15.8247 11.8182 16.1191 11.8182V10.0741C16.1034 10.0742 16.0879 10.0723 16.0738 10.0663C16.0596 10.0603 16.047 10.0516 16.037 10.0407C16.0269 10.0298 16.0197 10.0171 16.0157 10.0033C16.0117 9.98962 16.0111 9.97528 16.0139 9.96132L14.1164 9.67994ZM6.78424 11.8601C6.76839 11.6917 6.79557 11.5223 6.86601 11.3659C6.93644 11.2094 7.04683 11.0703 7.18809 10.9601L5.93166 9.63808C5.55987 9.9288 5.26953 10.2954 5.08453 10.7078C4.89953 11.1202 4.82515 11.5665 4.86753 12.0101L6.78424 11.8589V11.8601Z" fill="#0F0F0F" />
                            <path opacity="0.5" d="M3.06589 24.0105L2.1069 24.0872L3.06589 24.0117V24.0105ZM1.81971 10.947L2.77743 10.8726C2.75535 10.6492 2.63926 10.4422 2.45327 10.2944C2.26727 10.1467 2.02567 10.0696 1.77863 10.0792C1.5316 10.0887 1.29813 10.1843 1.12672 10.3459C0.955309 10.5075 0.859127 10.7228 0.858154 10.947H1.81971ZM4.02361 23.9372L2.77743 10.8726L0.862001 11.0214L2.1069 24.0872L4.02361 23.9372ZM2.78127 24.0617V10.9458L0.858154 10.947V24.0605L2.78127 24.0617ZM2.1069 24.0872C2.10299 24.045 2.10881 24.0025 2.12399 23.9623C2.13918 23.9222 2.16339 23.8854 2.1951 23.8543C2.22681 23.8231 2.26532 23.7983 2.30819 23.7813C2.35105 23.7644 2.39733 23.7557 2.44409 23.7559V25.5C3.37487 25.5 4.1031 24.7768 4.02361 23.9372L2.1069 24.0884V24.0872ZM2.44409 23.7559C2.63127 23.7559 2.78127 23.8942 2.78127 24.0617L0.858154 24.0605C0.858154 24.8535 1.56714 25.5 2.44409 25.5V23.7559Z" fill="#0F0F0F" />
                        </svg>
                        <div className="text-[#0f0f0f]">Like</div>
                    </button>
                    <div className="flex  gap-2 items-center w-[80%]  text-[20px]">
                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.70683 25.5C9.37154 25.5 9.04997 25.3683 8.81288 25.1339C8.57579 24.8995 8.4426 24.5815 8.4426 24.25V20.5H3.38565C2.71506 20.5 2.07193 20.2366 1.59775 19.7678C1.12357 19.2989 0.857178 18.663 0.857178 18V3C0.857178 1.6125 1.99499 0.5 3.38565 0.5H23.6134C24.284 0.5 24.9271 0.763392 25.4013 1.23223C25.8755 1.70107 26.1419 2.33696 26.1419 3V18C26.1419 18.663 25.8755 19.2989 25.4013 19.7678C24.9271 20.2366 24.284 20.5 23.6134 20.5H15.9016L11.2239 25.1375C10.9711 25.375 10.655 25.5 10.3389 25.5H9.70683ZM10.9711 18V21.85L14.8649 18H23.6134V3H3.38565V18H10.9711ZM19.8207 11.75H17.2922V9.25H19.8207V11.75ZM14.7638 11.75H12.2353V9.25H14.7638V11.75ZM9.70683 11.75H7.17836V9.25H9.70683V11.75Z" fill="#0F0F0F" />
                        </svg>
                        <input onChange={
                            (e) => {
                                if (e.target.value.length > 0) {
                                    setPostComment(true);
                                } else {
                                    setPostComment(false);
                                }
                            }
                        } placeholder="Add a comment"
                         className="h-8  border-2 w-[80%] text-[#0F0F0F] rounded-md"/>
                        <button disabled={!postComment} className="bg-[#0F0F0F] text-[#F8F8F8] disabled:bg-[#F5F5F5]  disabled:text-[#75777d] disabled:border disabled:border-black disabled:rounded-md font-bold rounded-md h-9 text-center w-20">Post</button>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>

}