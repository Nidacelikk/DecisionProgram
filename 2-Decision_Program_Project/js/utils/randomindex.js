export const randomIndexfnct = (options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const decision = options[randomIndex];
    return decision;
};
