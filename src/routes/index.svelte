<script>
    import me from "./_me.png";

    import { description } from "./_site.config.js";
</script>

<div class="w-full max-w-prose">
    <div class="w-full">
        <img src={me} alt="A photo of me" class="w-80 h-80 ml-16 rounded-full float-right" />

        <span class="text-4xl font-medium text-accent">Welcome!</span>

        <p>
            {description}
        </p>
    </div>
    
</div>
