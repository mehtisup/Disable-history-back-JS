<script>
//Use history.pushState() event for your button

window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    window.history.go(1);
};
</script>
