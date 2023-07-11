<div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
            <img class="d-inline-block" width="30px" src="https://demo.graygrids.com/themes/jobgrids/assets/images/jobs/ximg7.png.pagespeed.ic.CA33O3CwCr.webp" alt="">
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
            <a href="{{ route('dashboard') }}">
                <img class="d-inline-block" width="30px" src="https://demo.graygrids.com/themes/jobgrids/assets/images/jobs/ximg7.png.pagespeed.ic.CA33O3CwCr.webp" alt="">
            </a>
        </div>
        <ul class="sidebar-menu">
            <li class="menu-header">{{ __('Master') }}</li>
            <li class="{{ Request::routeIs('dashboard') ? 'active' : '' }}"><a class="nav-link" href="{{ route('dashboard') }}"><i class="fas fa-fire"></i> <span>{{ __('Dashboard') }}</span></a></li>

            @hasrole('Administrator')
                <li class="menu-header">{{ __('Management Data') }}</li>
                <li class="dropdown ">
                    <a href="" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-user"></i> <span>{{ __('Manage Company') }}</span></a>
                    <ul class="dropdown-menu">
                        <li class="{{ Request::routeIs('company.index') ? 'active' : '' }}"><a class="nav-link" href="{{ route('company.index') }}">{{ __('Company') }}</a></li>
                        <li class="{{ Request::routeIs('company.verification') ? 'active' : '' }}"><a class="nav-link" href="{{ route('company.verification') }}">{{ __('Unverified Register') }}</a></li>
                        <li class="{{ Request::routeIs('vacancy.verification') ? 'active' : '' }}"><a class="nav-link" href="{{ route('vacancy.verification') }}">{{ __('Unverified Vacancy') }}</a></li>
                    </ul>
                </li>
            @endhasrole

            @hasrole('Partner')
                <li class="menu-header">{{ __('Management1 Data') }}</li>
                <li class="dropdown ">
                    <a href="" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-user"></i> <span>{{ __('Manage Vacancy') }}</span></a>
                    <ul class="dropdown-menu">
                        <li class="{{ Request::routeIs('vacancy.index') ? 'active' : '' }}"><a class="nav-link" href="{{ route('vacancy.index') }}">{{ __('Vacancy') }}</a></li>
                    </ul>
                </li>
            @endhasrole
        </ul>
    </aside>
</div>
