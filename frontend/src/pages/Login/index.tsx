function Login() {
    function login() {
        console.log('attempt login')
        const login = document.getElementById('login') as HTMLInputElement
        const password = document.getElementById('password') as HTMLInputElement
        if (login.value === 'admin' && password.value === 'admin') {
            localStorage.setItem('token', 'admin')
            window.location.href = '/'
        }
    }

    function showPassword() {
        const password = document.getElementById('password') as HTMLInputElement
        const eye = document.getElementById('eye') as HTMLInputElement
        if (password.type === 'password') {
            password.type = 'text'
            eye.classList.remove('fa-eye')
            eye.classList.add('fa-eye-slash')
        } else {
            password.type = 'password'
            eye.classList.remove('fa-eye-slash')
            eye.classList.add('fa-eye')
        }
    }

    return (
        <>
            <div className="mx-5 space-y-5 md:mx-[10%] my-[5%] p-[2%] bg-gray-700 text-center rounded-xl md:rounded-3xl text-white">
                <h1 className='text-xl md:text-3xl'>Login</h1>
                <div className='flex flex-col items-center space-y-5'>
                    <input className='bg-gray-500 h-10 w-72 text-white rounded-xl text-center focus:outline focus:outline-slate-400' placeholder='Login' id="login" />

                    <div className='rounded-2xl space-x-2'>
                        <input type='password' className='focus:outline focus:outline-slate-400 bg-gray-500 h-10 w-64 text-white rounded-xl text-center' placeholder='Password' id='password' ></input>
                        <button id='eye' className='fa fa-eye h-10 bg-gray-500 text-black p-1 rounded-xl focus:outline focus:outline-slate-400' onClick={() => { showPassword() }} />
                    </div>

                    <button className='bg-blue-500 hover:bg-blue-800 active:bg-blue-900 text-white border border-blue-500 hover:border-red-300 font-bold p-2 px-5 rounded-2xl'
                        onClick={() => login()}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login