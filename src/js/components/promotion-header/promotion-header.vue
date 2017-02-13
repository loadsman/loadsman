<template>
    <nav class="nav promotion-header">
        <a class="nav-item promotion-header__pretty-link"
           href="https://github.com/loadsman/loadsman"
           title="Loadsman"
           target="_blank"
        >
            <span class="icon is-large"><i
                    class="fa fa-github nav-icon"></i></span>
            &nbsp;
            <span>LOADSMAN</span>
        </a>

        <div class="is-flex is-hidden-mobile">
            <a class="nav-item promotion-header__pretty-link"
               title="Wiki"
               href="https://github.com/asvae/laravel-api-tester/wiki"
               target="_blank"
            >
                <i class="fa fa-book nav-icon"></i>
            </a>
            <a class="nav-item promotion-header__pretty-link"
               title="Fork me"
               href="https://github.com/asvae/laravel-api-tester/fork"
               target="_blank"
            >
                <i class="fa fa-code-fork nav-icon"></i>
            </a>
            <a class="nav-item promotion-header__pretty-link"
               title="Issues"
               href="https://github.com/asvae/laravel-api-tester/issues"
               target="_blank"
            >
                <i class="fa fa-bug nav-icon"></i>
            </a>
        </div>
    </nav>
</template>

<script>
  export default {}
</script>

<style lang="scss" rel="stylesheet/scss">
    .promotion-header {
        background-color: transparent;
    }
    .promotion-header .promotion-header__pretty-link {
        padding: 0 10px;
        transition: all ease .2s;
        color: #006679;
        text-shadow: 1px 1px 1px #3debff, -1px -1px 1px #0092a2;
        &:hover {
            color: #c6faff;
            text-shadow: -1px -1px 1px #3debff, 1px 1px 1px #0092a2;
        }
    }
</style>

