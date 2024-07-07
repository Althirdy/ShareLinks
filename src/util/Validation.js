const validateLink = (link, platform, setIsValid) => {
    // Regular expression for URL format validation based on platform
    let platformRegex;
    switch (platform) {
        case 'youtube':
            platformRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(c\/[\w\-]+|channel\/[\w\-]+|user\/[\w\-]+|@[\w\-]+)|(youtu\.be\/[\w\-]+)|(youtube\.com\/watch\?v=[\w\-]+))[\w\-./#?]*$/;
            break;
        case 'github':
            platformRegex = /^(https?:\/\/)?(www\.)?github\.com\/[\w\-]+\/?[\w\-]*[\w\-./#?]*$/;
            break;
        case 'x':
            platformRegex = /^(https?:\/\/)?(www\.)?(x\.com\/[\w\-]+|twitter\.com\/[\w\-]+)[\w\-./#?]*$/;
            break;
        case 'facebook':
            platformRegex = /^(https?:\/\/)?(www\.)?(x\.com\/[\w\-]+|facebook\.com\/[\w\-]+)[\w\-./#?]*$/;
            break;
        default:
            platformRegex = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/; // Default regex for general URLs
            break;
    }

    // Check if the link matches the regex pattern
    setIsValid(platformRegex.test(link));
};


export { validateLink }