document.addEventListener('DOMContentLoaded', () => {
    const ideas = [
        { idea: "Online tutoring platform for niche subjects", 
          strategy: "Develop a platform with live video sessions and interactive tools. Partner with educators and create a marketing campaign targeting students interested in specialized subjects.", 
          earnings: "Potential earnings: $50,000 - $200,000 per year, depending on the number of subscribers and pricing model." },
        { idea: "Eco-friendly packaging solutions", 
          strategy: "Source sustainable materials and create packaging designs. Approach businesses with eco-friendly values and provide samples to showcase the benefits of your packaging.", 
          earnings: "Potential earnings: $100,000 - $500,000 per year, depending on the scale of operations and client base." },
        { idea: "Subscription box for artisanal foods", 
          strategy: "Curate a selection of local artisanal foods and create a subscription model. Promote through social media and collaborate with food bloggers to reach your target audience.", 
          earnings: "Potential earnings: $75,000 - $300,000 per year, based on subscription rates and market reach." },
        { idea: "Virtual reality fitness classes", 
          strategy: "Develop VR fitness programs and apps. Offer a free trial period and collaborate with fitness influencers to drive initial user adoption.", 
          earnings: "Potential earnings: $100,000 - $400,000 per year, depending on the number of users and subscription fees." },
        { idea: "Mobile app for personalized wellness plans", 
          strategy: "Design an app that customizes wellness plans based on user input. Use data analytics to refine recommendations and engage users with regular updates and tips.", 
          earnings: "Potential earnings: $80,000 - $250,000 per year, based on app downloads and in-app purchases." },
        { idea: "AI-powered resume builder", 
          strategy: "Create an AI tool that helps users build and optimize their resumes. Offer premium features for enhanced customization and partner with job platforms for visibility.", 
          earnings: "Potential earnings: $60,000 - $200,000 per year, depending on subscription rates and additional services." },
        { idea: "Customized 3D-printed products", 
          strategy: "Invest in 3D printing technology and create a range of customizable products. Market to niche audiences and offer online tools for customers to design their products.", 
          earnings: "Potential earnings: $90,000 - $350,000 per year, based on product demand and customization options." },
        { idea: "Health and wellness coaching via an app", 
          strategy: "Develop a coaching app with personalized health plans and tracking features. Offer in-app purchases for premium coaching sessions and partner with wellness influencers.", 
          earnings: "Potential earnings: $70,000 - $250,000 per year, depending on user engagement and subscription model." },
        { idea: "Local farm-to-table delivery service", 
          strategy: "Set up a delivery service that sources fresh produce directly from local farms. Promote the benefits of fresh, local food and create a subscription model for regular deliveries.", 
          earnings: "Potential earnings: $100,000 - $400,000 per year, depending on subscription rates and local demand." },
        { idea: "Digital marketplace for handmade crafts", 
          strategy: "Build an online platform for artisans to sell handmade crafts. Implement features like secure payments and customer reviews, and market the platform to craft enthusiasts.", 
          earnings: "Potential earnings: $80,000 - $300,000 per year, based on sales volume and platform fees." }
    ];

    const button = document.getElementById('generate-button');
    const ideaDisplay = document.getElementById('idea-display');
    const strategyDisplay = document.getElementById('strategy-display');
    const earningsDisplay = document.getElementById('earnings-display');
    const body = document.body;

    button.addEventListener('click', () => {
        body.classList.add('blurred'); // Apply blur effect to the entire page

        // Remove the show class to trigger the animation
        ideaDisplay.classList.remove('show');
        strategyDisplay.classList.remove('show');
        earningsDisplay.classList.remove('show');

        // Simulate a delay for the blur effect, then update and display content
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * ideas.length);
            const selectedIdea = ideas[randomIndex];

            // Update content
            ideaDisplay.querySelector('.highlight').textContent = selectedIdea.idea;
            strategyDisplay.querySelector('.highlight').textContent = selectedIdea.strategy;
            earningsDisplay.querySelector('.earnings-highlight').textContent = selectedIdea.earnings;
            
            // Remove blur effect and add sliding animation
            body.classList.remove('blurred');
            ideaDisplay.classList.add('show');
            strategyDisplay.classList.add('show');
            earningsDisplay.classList.add('show');
        }, 500); // Duration should match the CSS transition time
    });
});
