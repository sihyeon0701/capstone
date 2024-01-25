import React from "react";

function Aboutmenu2() {
    return(
        <div className="mt-8 space-y-5">
                    <p className="flex items-center -mx-2 text-indigo-700 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    <span className="mx-2">일정 관리</span>
                </p>

                <p className="flex items-center -mx-2 text-indigo-700 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    <span className="mx-2">화이트 보드</span>
                </p>

                <p className="flex items-center -mx-2 text-indigo-700 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                <span className="mx-2">화면 공유</span>
                </p>
        </div>
    );
};

export default Aboutmenu2;