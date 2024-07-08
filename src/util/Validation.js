const validateLink = (link, platform) => {
    // Regular expression for URL format validation based on platform
    let platformRegex;
    switch (platform) {
        case 'Youtube':
            platformRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(c\/[\w\-]+|channel\/[\w\-]+|user\/[\w\-]+|@[\w\-]+)|(youtu\.be\/[\w\-]+)|(youtube\.com\/watch\?v=[\w\-]+))[\w\-./#?]*$/;
            break;
        case 'Github':
            platformRegex = /^(https?:\/\/)?(www\.)?github\.com\/[\w\-]+\/?[\w\-]*[\w\-./#?]*$/;
            break;
        case 'X':
            platformRegex = /^(https?:\/\/)?(www\.)?(x\.com\/[\w\-]+|twitter\.com\/[\w\-]+)[\w\-./#?]*$/;
            break;
        case 'Facebook':
            platformRegex = /^(https?:\/\/)?(www\.)?(facebook\.com\/[a-zA-Z0-9(\.\?)?]+)/;
            break;
        default:
            platformRegex = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/; // Default regex for general URLs
            break;
    }

    // Check if the link matches the regex pattern
    return platformRegex.test(link);
};


export { validateLink }