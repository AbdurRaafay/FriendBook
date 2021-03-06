package com.friendbook.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

import javax.annotation.PreDestroy;

@EnableRedisHttpSession
public class HttpSessionConfig
{
    private LettuceConnectionFactory lcf;

    @Bean
    public LettuceConnectionFactory connectionFactory()
    {
        this.lcf = new LettuceConnectionFactory();
        return this.lcf;
    }

    @Bean
    @ConditionalOnMissingBean(StringRedisTemplate.class)
    public StringRedisTemplate stringRedisTemplate(RedisConnectionFactory redisConnectionFactory)
    {
        StringRedisTemplate template = new StringRedisTemplate();
        template.setConnectionFactory(redisConnectionFactory);
        template.getConnectionFactory().getConnection().flushAll(); //Clear Redis cache
        return template;
    }

    @PreDestroy
    public void Destroy()
    {
        System.out.println("Shutting down lettuce");
        this.lcf.getConnection().close();
        this.lcf.destroy();
    }
}