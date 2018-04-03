package com.erayt.examples.web.helloworld.service.impl;

import java.util.HashMap;
import java.util.Map;

import com.erayt.examples.web.helloworld.bean.Currency;
import com.erayt.examples.web.helloworld.service.CurrencyService;
import com.erayt.examples.web.helloworld.dao.CurrencyDao;
import com.erayt.solar.common.ServiceSupport;



public class CurrencyServiceImpl extends ServiceSupport implements CurrencyService {
	private CurrencyDao currencyDao;
	
	public CurrencyDao getCurrencyDao() {
		return currencyDao;
	}

	public void setCurrencyDao(CurrencyDao currencyDao) {
		this.currencyDao = currencyDao;
	}

	@Override
	public Currency findcCurrency(String id) {
		// TODO Auto-generated method stub
		
		Currency currency=currencyDao.selectCurrency(id);
		
		return currency;
	}

	@Override
	public void addCurrency(Currency currency) {
		// TODO Auto-generated method stub
		// 设置货币初始状态为正常
		currency.setStatus(Currency.STATUS_VALID);
		System.out.println("插入---------------"+currency);
		currencyDao.insertCurrency(currency);
	}

	@Override
	public void updateCurrency(Currency currency, String cyCode) {
		// TODO Auto-generated method stub
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("cyCode", cyCode);
		params.put("currency", currency);
		currencyDao.updateCurrency(params);
	}

	@Override
	public void deleteCurrency(String[] cyCode) {
		// TODO Auto-generated method stub
		currencyDao.deleteCurrency(cyCode);
		
	}

}
