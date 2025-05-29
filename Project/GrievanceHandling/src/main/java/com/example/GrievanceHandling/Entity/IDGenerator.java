package com.example.GrievanceHandling.Entity;

import org.hibernate.HibernateException;
import org.hibernate.MappingException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.enhanced.SequenceStyleGenerator;
import org.hibernate.internal.util.config.ConfigurationHelper;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.type.LongType;
import org.hibernate.type.Type;


import java.io.Serializable;
import java.util.Properties;
import java.util.function.LongToDoubleFunction;


public class IDGenerator extends SequenceStyleGenerator {

    public static final String PREFIX_PARAMETER ="Prefix";
    public static final String PREFIX_DEFAULT="";
    private String Prefix;

    public static final String NUMBER_FORMAT_PARAMETER="numberFormat";
    public static final String NUMBER_FORMAT_DEFAULT="%d";
    private String numberFormat;

    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException{
        return Prefix+String.format(numberFormat, super.generate(session,object) );
    }

    @Override
    public void configure(Type type, Properties params, ServiceRegistry serviceRegistry) throws MappingException{
        super.configure(LongType.INSTANCE, params, serviceRegistry);
        Prefix= ConfigurationHelper.getString(PREFIX_PARAMETER, params, PREFIX_DEFAULT);
        numberFormat=ConfigurationHelper.getString(NUMBER_FORMAT_PARAMETER,params, NUMBER_FORMAT_DEFAULT);

    }




}
