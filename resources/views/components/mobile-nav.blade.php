<div class="fixed transition-all bg-white w-1/2 top-0 bottom-0 right-0 z-10 mobilenav-hide py-36 px-10" id="mobile-nav">
    <div class="flex flex-col items-center justify-center gap-y-10 border-b py-8 border-gray-200">
        <a href="/" class="hover:text-blue-800 transition-colors duration-150">
            <div class="{{ request()->is('/') ? 'text-blue-700' : 'text-black' }}">
                Beranda
            </div>
        </a>
        <a href="#" class="hover:text-blue-800 transition-colors duration-150">
            <div class="{{ request()->is('profile') ? 'text-blue-700' : 'text-black' }}">
                Workshop
            </div>
        </a>
        <a href="#" class="hover:text-blue-800 transition-colors duration-150">
            <div class="{{ request()->is('profile') ? 'text-blue-700' : 'text-black' }}">
                Berita
            </div>
        </a>
        <a href="#" class="hover:text-blue-800 transition-colors duration-150">
            <div class="{{ request()->is('profile') ? 'text-blue-700' : 'text-black' }}">
                Talent
            </div>
        </a>
        <a href="{{route("unduhan")}}" class="hover:text-blue-800 transition-colors duration-150">
            <div class="{{ request()->is('unduhan') ? 'text-blue-700' : 'text-black' }}">
                Unduhan
            </div>
        </a>
    </div>
   
    <div class="mt-2">
        <a href="{{ route('login') }}"
            class="bg-blue-700 hover:bg-blue-800 px-7 py-2 block text-center text-white font-bold rounded-md items-center text-sm">
            {{ Auth::check() ? __('Dashboard') : __('Login') }}
        </a>
        
    </div>
    <div class="mt-2">
        <a href="{{ route('register') }}"
            class="bg-blue-700 hover:bg-blue-800 px-7 py-2 block text-center text-white font-bold rounded-md items-center text-sm">
            Register
        </a>
        
    </div>
    
    
</div>
