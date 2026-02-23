// Simple form handling for OKC AI Dispatch
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscribe-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();
            
            if (!email || !isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // In a real implementation, this would send to a backend
            // For now, just show a success message
            showMessage('Thank you! You\'ve been added to the OKC AI Dispatch waitlist. We\'ll notify you when we launch.', 'success');
            emailInput.value = '';
            
            // Log to console for debugging
            console.log('Subscription attempt:', email);
        });
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showMessage(text, type) {
        // Remove any existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const message = document.createElement('div');
        message.className = `form-message ${type}`;
        message.textContent = text;
        message.style.cssText = `
            margin-top: 15px;
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: 500;
            text-align: center;
            ${type === 'success' ? 'background: #d1fae5; color: #065f46;' : 'background: #fee2e2; color: #991b1b;'}
        `;
        
        form.parentNode.insertBefore(message, form.nextSibling);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 5000);
    }
    
    // Add some interactive effects
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add current year to copyright
    const yearElement = document.querySelector('.copyright p');
    if (yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', new Date().getFullYear());
    }
});