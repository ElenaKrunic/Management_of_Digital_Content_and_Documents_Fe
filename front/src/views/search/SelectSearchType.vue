<template>
<div>
<p style="text-align:center">
    Ова страница служи само за одабир типа претраге
</p>
<router-link to="/searchSimpleArticleQuery" class="btn btn-success navbar-btn" tag="button"> Претражи производе <span class="badge badge-light"></span>
</router-link> &nbsp; <br><br>
<router-link to="/searchSimpleErrandQuery" class="btn btn-success navbar-btn" tag="button"> Претражи поруџбине <span class="badge badge-light"></span>
</router-link>&nbsp; <br><br>
<router-link to="/searchRangeArticleQuery" class="btn btn-success navbar-btn" tag="button"> Претражи производе по опсегу цијене <span class="badge badge-light"></span>
</router-link>&nbsp; <br><br>
<router-link to="/searchRangeErrandQuery" class="btn btn-success navbar-btn" tag="button"> Претражи поруџбине по опсегу оцјена <span class="badge badge-light"></span>
</router-link>&nbsp; <br><br>
<router-link to="/searchBoolArticleQuery" class="btn btn-success navbar-btn" tag="button"> Претражи производе комбинованом претрагом са више поља <span class="badge badge-light"></span>
</router-link>&nbsp; <br><br>
</div>
</template>

