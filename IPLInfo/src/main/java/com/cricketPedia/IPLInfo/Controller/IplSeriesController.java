package com.cricketPedia.IPLInfo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cricketPedia.IPLInfo.Model.MatchSummary;
import com.cricketPedia.IPLInfo.Repository.IplMatchRepository;

@RestController
public class IplSeriesController {
	

	@Autowired IplMatchRepository iplRepository;
	
	@GetMapping("/IPLSeries/2018")
	public String getIPLSeriesInfoByYear() {
		return "Hai:";
	}
	
	@GetMapping("/IPLSeries/")
	public Page<MatchSummary> findBySeason(Pageable pageable){
		return iplRepository.findAll(pageable);		
	}
	
	@GetMapping(value= "/Series/{season}")
	public Page<MatchSummary> getMatchDetailsByYear(@PathVariable int season, Pageable pageable){
		return iplRepository.findBySeason(season, pageable);
	}
	
//	@GetMapping("/Team")
//	public List<MatchSummary> findTeam(){
//		return iplRepsitory.findBy
//	}
	
	
	@GetMapping("/Teams/{teamName}")
	public Page<MatchSummary> findTeamDetails(@PathVariable String teamName, Pageable pageable){
		return iplRepository.findByTeam1(teamName ,pageable);
	}
	
	
	
	

}
