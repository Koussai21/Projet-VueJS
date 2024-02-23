<template>
    <header> 
        <nav> 
            <ul> 
                <div class="liste">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/Conversation">Conversation</router-link></li>  
                    <li><a href="about.html">About</a></li> 
                    <li><a href="contact.html">Contact</a></li> 
                    <SignInButton v-if="!isAuthenticated" @click="redirectToSignIn">Sign In</SignInButton>
                    <GoogleLogin v-if="!isAuthenticated" @click="redirectToSignIn">Sign In</GoogleLogin>
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
            redirectToSignIn() {
            this.$router.push("/signin"); 
        },
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