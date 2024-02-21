<template>
    <header> 
        <nav> 
            <ul> 
                <div class="liste">
                    <li><a href="home.html">Home</a></li> 
                    <li><a href="about.html">About</a></li> 
                    <li><a href="contact.html">Contact</a></li> 
                    <SignInButton >Sign In</SignInButton>
                    
                </div>
            </ul> 
        </nav> 
    </header>

</template>

<script>
        import SignInButton from "./SignInButton.vue";


        export default {
        name: 'BaseHeader',
        props: {
            msg: String
        },
        components:{
            SignInButton,

        },
        methods:{
            
        }
        
        };   
</script>

<style>

body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

}

main {
    flex: 1;
}

header { 
    background-color: #333;
    color: white; 
    padding: 40px; 
    margin: 0;
    
} 


header nav { 
    float: right; 
    
} 

header nav ul { 
    list-style-type: none; 
    margin: 0; 
    padding: 0; 
    
} 

header nav ul li { 
    display: inline; 
    margin-right: 10px; 
    
} 

header nav ul li a { 
    color: white; 
    text-decoration: none; 
    
}



</style>