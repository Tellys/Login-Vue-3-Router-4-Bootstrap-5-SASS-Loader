<template>
    <div class="alert alert-{{type}} d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="{{type}}:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
        {{ message }}
        </div>
    </div>
</template>


<script>
export default{
    name: 'Alert',
    props:{
        type: String,
        message: String,
    }
}
</script>