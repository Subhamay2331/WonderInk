const homePage = async (req,res) => {
    try {
        const locals = {
            title: "Wonderink",
            description: "Welcome to our home page",
        };
        res.render('home/index',{locals})
    } catch (error) {
        console.log(`Home page error : ${error}`);
    }
}
const blogsPage=async (req,res) => {
    try {
        const locals = {
            title: "Wonderink - Blogs",
            description: "Welcome to our Blogs page",
        };
        res.render('home/blogs',{locals})
    } catch (error) {
        console.log(`Blogs page error : ${error}`);
    }
}

export{
    homePage,
    blogsPage
}