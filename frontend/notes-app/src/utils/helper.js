export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials = (fullName) => {
    if (!fullName) return "";

    const names = fullName.split(" ");
    const firstNameInitial = names[0].charAt(0).toUpperCase(); // ตัวแรกของชื่อ
    const lastName = names[names.length - 1]; // นามสกุล
    const lastNameInitial = lastName.charAt(0).toUpperCase(); // ตัวแรกของนามสกุล

    return `${firstNameInitial}${lastNameInitial}`; // รวมชื่อย่อ
};