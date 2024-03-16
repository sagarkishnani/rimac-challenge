export const calculateAge = (birthday: string) => {
    const birthDay: Date = new Date(birthday);

    const currentDate: Date = new Date();

    const timeDifference: number = currentDate.getTime() - birthDay.getTime();

    return Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
}
