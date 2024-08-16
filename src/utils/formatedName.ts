export const capitalize = (firstLetter: string) => {
    return firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1).toLowerCase();
}