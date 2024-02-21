<template>
    <footer> 
        <p>&copy; 2021 Site Name. All rights reserved.</p> 
    </footer>
 </template>
 
 <script>
         export default {
         name: 'BaseFooter',
         props: {
             msg: String
         }
     }
 </script>

 <style>

footer { 
    background-color: #333; 
    color: white; 
    padding: 10px 0; 
    text-align: center;
}

</style>