import React, { useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const Toast = ({ isShown, message, type, onClose }) => {
    useEffect(() => {
        if (isShown) {
            const timeoutId = setTimeout(() => {
                onClose();
            }, 3000); // หายไปหลังจาก 3 วินาที

            return () => {
                clearTimeout(timeoutId); // ล้าง timeout เมื่อ component ถูกล้างหรือมีการเปลี่ยนแปลง
            };
        }
    }, [isShown, onClose]);

    return (
        <div 
            className={`fixed top-20 right-6 transition-opacity duration-1000 ease-in-out ${
                isShown ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
            <div 
                className={`min-w-52 bg-white border shadow-2xl rounded-md relative after:w-[5px] after:h-full ${
                    type === "delete" ? "after:bg-red-500" : "after:bg-green-500"
                } after:absolute after:left-0 after:top-0 after:rounded-l-lg`}
            >
                <div className="flex items-center gap-3 py-2 px-4">
                    <div 
                        className={`w-10 h-10 flex items-center justify-center rounded-full ${
                            type === "delete" ? "bg-red-50" : "bg-green-50"
                        }`}
                    >
                        {type === 'delete' ? (
                            <MdDeleteOutline className="text-xl text-red-500"/> 
                        ) : (
                            <LuCheck className="text-xl text-green-500"/>
                        )}
                    </div>

                    <p className="text-sm text-slate-800">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Toast;
