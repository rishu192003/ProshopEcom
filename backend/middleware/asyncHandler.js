const asyncHandler = fn => (req,res,next) =>{
    Promise.resolve(fn(req,res,next)).catch(next)
}

export default asyncHandler


//this middleware is used for async function that we make when making mongodb connection so that to check if dtatabse is connected when we fetch data through api nd if there is error then just give error