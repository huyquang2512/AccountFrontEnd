<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu" style="height: 93vh">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Quản lý</div>

          <!-- Team -->
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#userDropdown"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <nuxt-link to="/Account/List"
              ><a class="nav-link" href="">Account</a></nuxt-link
            >
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
