!function(t){t(document).ready(function(){t(".site-nav-wrapper").squishMenu(),t(".site-content-wrapper").fitVids(),t("[role='tab']").click(function(){t("li[role='tab']").attr("aria-selected","false"),t(this).attr("aria-selected","true");var a=t(this).attr("aria-controls"),e=t("#"+a);t("div[role='tabpanel']").attr("aria-hidden","true"),e.attr("aria-hidden","false")})})}(window.jQuery||window.$);